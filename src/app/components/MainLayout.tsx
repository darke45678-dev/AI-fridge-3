import { Outlet, useLocation, useNavigate } from "react-router";
import { BottomNav } from "../components/BottomNav";
import { motion, AnimatePresence } from "framer-motion";
import { useIngredients } from "../services/IngredientContext";
import { useEffect, useState } from "react";
import { Bell } from "lucide-react";

export function MainLayout() {
    const location = useLocation();
    const navigate = useNavigate();
    const { settings } = useIngredients();

    const tabs = ["/", "/inventory", "/recipes", "/saved", "/profile"];
    const currentIndex = tabs.findIndex(t => t === location.pathname || (t !== '/' && location.pathname.startsWith(t)));

    const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
        const threshold = 100;
        if (info.offset.x > threshold && currentIndex > 0) {
            navigate(tabs[currentIndex - 1]);
        } else if (info.offset.x < -threshold && currentIndex < tabs.length - 1 && currentIndex !== -1) {
            navigate(tabs[currentIndex + 1]);
        }
    };

    const [toast, setToast] = useState<{ title: string, body: string } | null>(null);

    useEffect(() => {
        const handleNotification = (e: any) => {
            setToast({ title: e.detail.title, body: e.detail.body });
            // 5秒後自動關閉
            setTimeout(() => {
                setToast(null);
            }, 5000);
        };
        window.addEventListener('app-notification', handleNotification);
        return () => window.removeEventListener('app-notification', handleNotification);
    }, []);

    return (
        <div className={`min-h-screen bg-black flex justify-center w-full ${!settings.darkMode ? 'light-theme' : ''}`}>
            <div className="w-full max-w-[430px] min-h-screen bg-[#0f2e24] text-white relative flex flex-col shadow-2xl overflow-hidden filter-theme">
                <main className="flex-1 overflow-y-auto no-scrollbar scroll-smooth">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={location.pathname}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            onDragEnd={handleDragEnd}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="touch-pan-y min-h-full"
                        >
                            <Outlet />
                        </motion.div>
                    </AnimatePresence>
                </main>
                <BottomNav />

                {/* 網頁內建模擬通知系統，保證能看到 (Cyberpunk 風格) */}
                <AnimatePresence>
                    {toast && (
                        <motion.div
                            initial={{ opacity: 0, y: -50, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[380px] z-[9999] pointer-events-none"
                        >
                            <div className="bg-[#1a4d3d]/90 backdrop-blur-xl border border-red-500/50 rounded-2xl p-4 shadow-[0_10px_40px_rgba(239,68,68,0.3)] flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 border border-red-500/50">
                                    <Bell size={18} className="text-red-500" />
                                </div>
                                <div>
                                    <h4 className="text-red-500 font-black text-[11px] tracking-widest uppercase mb-1 drop-shadow-[0_0_5px_rgba(239,68,68,0.5)]">
                                        {toast.title}
                                    </h4>
                                    <p className="text-xs text-white font-bold leading-relaxed">
                                        {toast.body}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
