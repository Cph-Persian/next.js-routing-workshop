
type TeachersPageProps = {
  params: { id: string };
};

const teachers = {
  "Christian": {
    title: "Christian Ole Kirschberg",

    description: "Den varmeste lærer på EK.",
  },

  "Michael": {
    title: "Michael Hendricks",

    description: "Jeg hedder Michael Hendricks og jeg er underviser på Erhvervsakademi København, jeg elsker ost og lange gåture på stranden.",
  },

  "Dinfar": {
    title: "Din far (Supreme Daddy)",

    description: "Den mægtigste far i universet, og hersker over alle fædre og deres børn og Erhvervsakademi København og alle andre akademier i hele verden.",
  },
};

export default async function TeachersPage({ params }: TeachersPageProps) {

  const { id } = await params;

  const teacher = teachers[id as keyof typeof teachers];

  if (!teacher) return <p>Not found</p>;


  return (
    <>
      <h1>{teacher.title}</h1>

      <p>{teacher.description}</p>

      <p>
        <strong>Id:</strong> {id}
      </p>

    </>
  );
}