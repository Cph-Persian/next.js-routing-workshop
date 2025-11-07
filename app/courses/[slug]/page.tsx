'use client';
import { useRouter } from "next/navigation";
type CoursePageProps = {
  params: { slug: string };
};

const courses = {
  "nextjs-routing": {
    title: "Next.js Routing",

    description: "Learn file-based routing, layouts, and dynamic segments.",
  },

  "react-basics": {
    title: "React Basics",

    description: "JSX, components, props, and state.",
  },

  "fullstack-supabase": {
    title: "Fullstack with Supabase",

    description: "DB, auth, storage, and Edge functions.",
  },
};

export default async function CoursePage({ params }: CoursePageProps) {
  const router = useRouter();

  const { slug } = await params;

  const course = courses[slug as keyof typeof courses];

  if (!course) return <p>Not found</p>;

  const handleClick = () => {
    const isFormValid = true; // Simulate form validation
    
    if (isFormValid) {
      router.push("/");
    }
  };

  return (
    <>
      <h1>{course.title}</h1>

      <p>{course.description}</p>

      <p>
        <strong>Slug:</strong> {slug}
      </p>

      <button onClick={handleClick} style={{padding: 20, backgroundColor: "#fff", color: "#000", cursor: "pointer"}}>Test-Navigation</button>
    </>
  );
}
