const VyomFooter = () => {
  return (
    <footer className="py-16 border-t border-border/50">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-2xl font-heading italic mb-2">
          <span className="text-gradient-saffron">Vyom</span> AI
        </h3>
        <p className="text-sm text-muted-foreground mb-8">Indigenous AI for India</p>
        
        <div className="flex items-center justify-center gap-8 text-xs text-muted-foreground/60 mb-8">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Contact</span>
          <span>Research</span>
        </div>

        <div className="space-y-2">
          <p className="text-xs text-muted-foreground/40">© 2026 Vyom AI. All rights reserved.</p>
          <p className="text-xs text-muted-foreground/30">Made by Biswajit & Nitin</p>
        </div>
      </div>
    </footer>
  );
};

export default VyomFooter;
