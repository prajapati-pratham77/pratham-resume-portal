
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 border-t">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground">
          &copy; {currentYear} Pratham Prajapati. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
