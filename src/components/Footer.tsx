export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-foreground/5 border-t">
      <div className="container">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold text-primary">Pack Canva Revistas</h3>
          <p className="text-muted-foreground">
            Transforme sua criatividade em lucro com revistas personalizadas
          </p>
          <div className="pt-8 border-t text-sm text-muted-foreground">
            © {new Date().getFullYear()} Pack Canva Revistas. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};
