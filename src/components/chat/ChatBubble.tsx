import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { User, Sparkles } from "lucide-react";
import { ChatMessage } from "@/pages/Chat";

interface ChatBubbleProps {
  message: ChatMessage;
}

const ChatBubble = ({ message }: ChatBubbleProps) => {
  const isUser = message.role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`flex gap-3 py-4 ${isUser ? "flex-row-reverse" : ""}`}
    >
      {/* Avatar */}
      <div
        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
          isUser
            ? "bg-primary/15 text-primary"
            : "bg-accent/15 text-accent"
        }`}
      >
        {isUser ? <User className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
      </div>

      {/* Content */}
      <div
        className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
          isUser
            ? "bg-primary/10 border border-primary/15 text-foreground"
            : "bg-muted/50 border border-border/40 text-foreground"
        }`}
      >
        {isUser ? (
          <p>{message.content}</p>
        ) : (
          <div className="prose prose-sm prose-invert max-w-none [&_p]:mb-2 [&_p:last-child]:mb-0 [&_strong]:text-foreground [&_blockquote]:border-l-accent [&_blockquote]:text-muted-foreground/70 [&_li]:text-foreground/80">
            <ReactMarkdown>{message.content}</ReactMarkdown>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ChatBubble;
