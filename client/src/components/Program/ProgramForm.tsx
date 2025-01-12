import type { ReactNode } from "react";

type ProgramData = {
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
  category_id: number;
  id: number;
};

interface ProgramFormProps {
  children: ReactNode;
  defaultValue: ProgramData;
  onSubmit: (program: ProgramData) => void;
}

function ProgramForm({ children, defaultValue, onSubmit }: ProgramFormProps) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const title = formData.get("title") as string;
        const synopsis = formData.get("synopsis") as string;
        const poster = formData.get("poster") as string;
        const country = formData.get("country") as string;
        const year = Number(formData.get("year"));
        const category_id = Number(formData.get("category_id"));
        const id = defaultValue.id;

        onSubmit({
          title,
          synopsis,
          poster,
          country,
          year,
          category_id,
          id,
        });
      }}
    >
      <input
        type="text"
        name="title"
        defaultValue={defaultValue.title}
        placeholder="Title"
      />
      <input
        type="text"
        name="synopsis"
        defaultValue={defaultValue.synopsis}
        placeholder="Synopsis"
      />
      <input
        type="text"
        name="poster"
        defaultValue={defaultValue.poster}
        placeholder="URL"
      />
      <input
        type="text"
        name="country"
        defaultValue={defaultValue.country}
        placeholder="Country"
      />
      <input
        type="number"
        name="year"
        defaultValue={defaultValue.year}
        placeholder="Year"
      />
      <input
        type="number"
        name="category_id"
        defaultValue={defaultValue.category_id}
        placeholder="Category"
      />
      <button type="submit">{children}</button>
    </form>
  );
}

export default ProgramForm;
