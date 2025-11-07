import Link from "next/link";

const teachers = [
  { id: "Christian", title: "Christian Ole Kirschberg"},

  { id: "Michael", title: "Michael Hendricks"},

  { id: "Dinfar", title: "Din far (Supreme Daddy)"},
];

export default function TeachersPage() {
  return (
    <>
      <h1>This i the instructors on EK</h1>

      <ul>
        {teachers.map((c) => (
          <li key={c.id}>
            <Link href={`/teachers/${c.id}`}>{c.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}