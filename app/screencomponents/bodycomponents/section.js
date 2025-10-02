export default function Section({ children, classname = "" }) {
  return <div className={`section px-8 ${classname}`}>{children}</div>;
}
