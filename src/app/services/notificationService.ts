/**
 * Notification Service for Kitchen AI
 * Handles web notifications for expiring ingredients.
 */

export const notificationService = {
    /**
     * Request permission for web notifications
     */
    async requestPermission(): Promise<boolean> {
        if (!("Notification" in window)) {
            console.warn("This browser does not support desktop notification");
            return false;
        }

        if (Notification.permission === "granted") {
            return true;
        }

        if (Notification.permission !== "denied") {
            const result = await Notification.requestPermission();
            return result === "granted";
        }

        return false;
    },

    /**
     * Send a web notification
     */
    send(title: string, body: string) {
        console.log(`🔔 [NotificationService] Permission status: ${Notification.permission}`);

        if (Notification.permission === "granted") {
            try {
                new Notification(title, {
                    body,
                    silent: false, // 強制發出聲音
                });
                console.log("🔔 [NotificationService] Notification object created successfully.");
            } catch (e) {
                console.error("🔔 [NotificationService] Error creating notification:", e);
            }
        } else {
            console.warn("🔔 [NotificationService] Cannot send notification because permission is:", Notification.permission);
        }
    },

    /**
     * Check ingredients and notify if needed
     */
    checkAndNotify(items: any[], settings: { notifications: boolean }) {
        if (!settings.notifications) return;

        // 檢查今天是否已經傳送過通知
        const today = new Date().toISOString().split('T')[0];
        const lastNotified = localStorage.getItem('last_notification_date');

        if (lastNotified === today) {
            console.log("🔔 [NotificationService] Notification already sent today. Skipping.");
            return;
        }

        console.log("🔔 [NotificationService] Checking ingredients...", { itemCount: items.length });

        // 找出即將過期的食材 (3天內，且尚未過期)
        const expiringItems = items.filter(i => {
            const daysPassed = Math.floor((Date.now() - (i.timestamp || Date.now())) / (1000 * 60 * 60 * 24));
            const expiryDays = i.expiryDays !== undefined ? i.expiryDays : 7;
            const daysLeft = expiryDays - daysPassed;

            // 前 3 天開始提醒
            return daysLeft >= 0 && daysLeft <= 3 && !i.isSpoiled;
        });

        if (expiringItems.length > 0) {
            const itemCount = expiringItems.length;
            const firstItem = expiringItems[0].name;
            const title = "⚠️ 食材保存警告";
            const body = itemCount === 1
                ? `您的 "${firstItem}" 即將過期，請儘速使用！`
                : `您有 ${itemCount} 件食材（如：${firstItem}等）面臨過期風險。`;

            this.send(title, body);
            // 記錄今天已發送過通知
            localStorage.setItem('last_notification_date', today);
        }
    }
};
