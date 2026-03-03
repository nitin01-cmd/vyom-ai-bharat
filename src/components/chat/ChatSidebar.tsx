import { Plus, BookOpen, Sprout, Scale, Heart, Globe, MessageSquare } from "lucide-react";
import { ChatMode, ChatLanguage } from "@/pages/Chat";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ChatSidebarProps {
  mode: ChatMode;
  onModeChange: (mode: ChatMode) => void;
  language: ChatLanguage;
  onLanguageChange: (lang: ChatLanguage) => void;
  chatHistory: { id: string; title: string; date: string }[];
  onNewChat: () => void;
}

const modes: { value: ChatMode; label: string; icon: React.ElementType }[] = [
  { value: "education", label: "Education", icon: BookOpen },
  { value: "agriculture", label: "Agriculture", icon: Sprout },
  { value: "legal", label: "Legal", icon: Scale },
  { value: "healthcare", label: "Healthcare", icon: Heart },
];

const languages: { value: ChatLanguage; label: string }[] = [
  { value: "english", label: "English" },
  { value: "hindi", label: "हिन्दी (Hindi)" },
  { value: "tamil", label: "தமிழ் (Tamil)" },
  { value: "bengali", label: "বাংলা (Bengali)" },
  { value: "telugu", label: "తెలుగు (Telugu)" },
  { value: "marathi", label: "मराठी (Marathi)" },
  { value: "kannada", label: "ಕನ್ನಡ (Kannada)" },
];

const ChatSidebar = ({
  mode,
  onModeChange,
  language,
  onLanguageChange,
  chatHistory,
  onNewChat,
}: ChatSidebarProps) => {
  return (
    <Sidebar collapsible="icon" className="border-r border-border/40">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
            <span className="text-sm font-heading italic text-primary">V</span>
          </div>
          <span className="font-heading italic text-lg group-data-[collapsible=icon]:hidden">
            <span className="text-gradient-saffron">Vyom</span>{" "}
            <span className="text-foreground">AI</span>
          </span>
        </div>
        <button
          onClick={onNewChat}
          className="w-full flex items-center gap-2 px-3 py-2.5 rounded-lg border border-border/60 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0"
        >
          <Plus className="w-4 h-4" />
          <span className="group-data-[collapsible=icon]:hidden">New Chat</span>
        </button>
      </SidebarHeader>

      <SidebarContent>
        {/* Modes */}
        <SidebarGroup>
          <SidebarGroupLabel>Modes</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {modes.map((m) => (
                <SidebarMenuItem key={m.value}>
                  <SidebarMenuButton
                    isActive={mode === m.value}
                    onClick={() => onModeChange(m.value)}
                    tooltip={m.label}
                  >
                    <m.icon className="w-4 h-4" />
                    <span>{m.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        {/* Language */}
        <SidebarGroup>
          <SidebarGroupLabel>Language</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="px-2 group-data-[collapsible=icon]:hidden">
              <Select value={language} onValueChange={(v) => onLanguageChange(v as ChatLanguage)}>
                <SelectTrigger className="h-9 bg-muted/50 border-border/40 text-sm">
                  <Globe className="w-3.5 h-3.5 mr-2 text-muted-foreground" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((l) => (
                    <SelectItem key={l.value} value={l.value}>
                      {l.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        {/* Chat History */}
        <SidebarGroup>
          <SidebarGroupLabel>Recent</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {chatHistory.length === 0 ? (
                <p className="px-3 py-2 text-xs text-muted-foreground/60 group-data-[collapsible=icon]:hidden">
                  No conversations yet
                </p>
              ) : (
                chatHistory.map((chat) => (
                  <SidebarMenuItem key={chat.id}>
                    <SidebarMenuButton tooltip={chat.title}>
                      <MessageSquare className="w-4 h-4" />
                      <span className="truncate">{chat.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="group-data-[collapsible=icon]:hidden">
        <div className="px-4 py-3 text-center">
          <p className="text-[10px] text-muted-foreground/50 leading-relaxed">
            Vyom AI · Indigenous Intelligence
            <br />
            Made by Biswajit & Nitin
          </p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default ChatSidebar;
