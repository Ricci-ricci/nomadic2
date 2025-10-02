export default function Container({ children, classname = "" }) {
  return (
    <div className={`container mx-auto py-8 md:py-12 ${classname}`}>
      {children}
    </div>
  );
}
