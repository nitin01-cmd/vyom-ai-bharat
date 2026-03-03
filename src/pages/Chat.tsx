import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import ChatSidebar from "@/components/chat/ChatSidebar";
import ChatMain from "@/components/chat/ChatMain";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export type ChatMode = "general" | "education" | "agriculture" | "legal" | "healthcare";
export type ChatLanguage = "english" | "hindi" | "tamil" | "bengali" | "telugu" | "marathi" | "kannada";

const Chat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [mode, setMode] = useState<ChatMode>("general");
  const [language, setLanguage] = useState<ChatLanguage>("english");
  const [chatHistory, setChatHistory] = useState<{ id: string; title: string; date: string }[]>([]);

  const handleSend = (text: string) => {
    const userMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);

    // Simulate AI response
    setTimeout(() => {
      const aiMsg: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: getSimulatedResponse(text, mode, language),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMsg]);
    }, 1200);

    if (chatHistory.length === 0 || messages.length === 0) {
      setChatHistory((prev) => [
        { id: crypto.randomUUID(), title: text.slice(0, 40), date: "Today" },
        ...prev,
      ]);
    }
  };

  const handleNewChat = () => {
    setMessages([]);
  };

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full bg-background">
        <ChatSidebar
          mode={mode}
          onModeChange={setMode}
          language={language}
          onLanguageChange={setLanguage}
          chatHistory={chatHistory}
          onNewChat={handleNewChat}
        />
        <ChatMain
          messages={messages}
          mode={mode}
          onModeChange={setMode}
          language={language}
          onSend={handleSend}
        />
      </div>
    </SidebarProvider>
  );
};

function getSimulatedResponse(query: string, mode: ChatMode, language: ChatLanguage): string {
  const modeLabels: Record<ChatMode, string> = {
    general: "General",
    education: "Education",
    agriculture: "Agriculture",
    legal: "Legal",
    healthcare: "Healthcare",
  };

  if (language === "hindi") {
    return `**व्योम AI** — ${modeLabels[mode]} मोड\n\nआपके प्रश्न "${query.slice(0, 50)}" का विश्लेषण किया जा रहा है।\n\nयह एक प्रदर्शन प्रतिक्रिया है। पूर्ण AI बैकएंड एकीकरण के साथ, व्योम भारतीय संदर्भ में बुद्धिमान उत्तर प्रदान करेगा।\n\n> *भारतीय सार्वजनिक ज्ञान आधार पर प्रशिक्षित*`;
  }

  return `**Vyom AI** — ${modeLabels[mode]} Mode\n\nAnalyzing your query: "${query.slice(0, 50)}"\n\nThis is a demonstration response. With full AI backend integration, Vyom will provide intelligent, context-aware answers grounded in Indian knowledge systems.\n\n**Key capabilities in ${modeLabels[mode]} mode:**\n- Multilingual understanding across 22 scheduled languages\n- Indian context-first reasoning\n- Source-verified responses\n\n> *Trained on Indian Public Knowledge Base*`;
}

export default Chat;
