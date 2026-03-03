import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUp, Paperclip, Mic, BookOpen, Sprout, Scale, Heart, Zap } from "lucide-react";
import { ChatMode } from "@/pages/Chat";

interface ChatInputProps {
  mode: ChatMode;
  onModeChange: (mode: ChatMode) => void;
  onSend: (text: string) => void;
}

const modeConfig: { value: ChatMode; label: string; icon: React.ElementType }[] = [
  { value: "general", label: "General", icon: Zap },
  { value: "education", label: "Edu", icon: BookOpen },
  { value: "agriculture", label: "Agri", icon: Sprout },
  { value: "legal", label: "Legal", icon: Scale },
  { value: "healthcare", label: "Health", icon: Heart },
];

const ChatInput = ({ mode, onModeChange, onSend }: ChatInputProps) => {
  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [micActive, setMicActive] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    if (!text.trim()) return;
    onSend(text.trim());
    setText("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 160) + "px";
    }
  }, [text]);

  return (
    <div className="max-w-3xl mx-auto w-full">
      {/* Mode toggles */}
      <div className="flex items-center gap-1.5 mb-2 px-1">
        {modeConfig.map((m) => (
          <button
            key={m.value}
            onClick={() => onModeChange(m.value)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium transition-all ${
              mode === m.value
                ? "bg-primary/15 text-primary border border-primary/25"
                : "text-muted-foreground/60 hover:text-muted-foreground hover:bg-muted/40"
            }`}
          >
            <m.icon className="w-3 h-3" />
            {m.label}
          </button>
        ))}
      </div>

      {/* Input container */}
      <motion.div
        className={`relative rounded-2xl border transition-all duration-300 ${
          isFocused
            ? "border-primary/40 shadow-[0_0_30px_-10px_hsl(var(--saffron)/0.2)]"
            : "border-border/50 shadow-none"
        } bg-muted/30`}
      >
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={handleKeyDown}
          placeholder="Ask Vyom anything..."
          rows={1}
          className="w-full resize-none bg-transparent px-4 pt-3.5 pb-12 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none"
        />

        {/* Bottom bar */}
        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <button className="p-2 rounded-lg text-muted-foreground/50 hover:text-muted-foreground hover:bg-muted/50 transition-colors">
              <Paperclip className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMicActive(!micActive)}
              className={`p-2 rounded-lg transition-all ${
                micActive
                  ? "text-primary bg-primary/10 shadow-[0_0_12px_-2px_hsl(var(--saffron)/0.4)]"
                  : "text-muted-foreground/50 hover:text-muted-foreground hover:bg-muted/50"
              }`}
            >
              <Mic className="w-4 h-4" />
              {micActive && (
                <motion.div
                  className="absolute inset-0 rounded-lg border border-primary/30"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              )}
            </button>
          </div>

          <button
            onClick={handleSend}
            disabled={!text.trim()}
            className={`p-2 rounded-xl transition-all ${
              text.trim()
                ? "bg-primary text-primary-foreground shadow-[0_0_20px_-5px_hsl(var(--saffron)/0.4)] hover:shadow-[0_0_25px_-5px_hsl(var(--saffron)/0.5)]"
                : "bg-muted/60 text-muted-foreground/30 cursor-not-allowed"
            }`}
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ChatInput;
