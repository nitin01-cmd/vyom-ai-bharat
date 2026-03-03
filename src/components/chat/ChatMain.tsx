import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ChatMessage, ChatMode, ChatLanguage } from "@/pages/Chat";
import ChatHero from "./ChatHero";
import ChatBubble from "./ChatBubble";
import ChatInput from "./ChatInput";

interface ChatMainProps {
  messages: ChatMessage[];
  mode: ChatMode;
  onModeChange: (mode: ChatMode) => void;
  language: ChatLanguage;
  onSend: (text: string) => void;
}

const ChatMain = ({ messages, mode, onModeChange, language, onSend }: ChatMainProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isEmpty = messages.length === 0;

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex-1 flex flex-col min-h-screen relative">
      {/* Header */}
      <header className="h-13 flex items-center px-4 border-b border-border/30 bg-background/80 backdrop-blur-sm sticky top-0 z-10">
        <SidebarTrigger className="mr-3" />
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-foreground/80">Vyom AI</span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
            Indian Context Mode
          </span>
        </div>
        <div className="ml-auto text-[10px] text-muted-foreground/50">
          Trained on Indian Public Knowledge Base
        </div>
      </header>

      {/* Messages Area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto">
        {isEmpty ? (
          <ChatHero />
        ) : (
          <div className="max-w-3xl mx-auto px-4 py-6 space-y-1">
            <AnimatePresence mode="popLayout">
              {messages.map((msg) => (
                <ChatBubble key={msg.id} message={msg} />
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="sticky bottom-0 bg-gradient-to-t from-background via-background to-transparent pt-6 pb-4 px-4">
        <ChatInput mode={mode} onModeChange={onModeChange} onSend={onSend} />
        <p className="text-center text-[10px] text-muted-foreground/40 mt-2">
          Vyom AI · Indigenous Intelligence Infrastructure · Made by Biswajit & Nitin
        </p>
      </div>
    </div>
  );
};

export default ChatMain;
