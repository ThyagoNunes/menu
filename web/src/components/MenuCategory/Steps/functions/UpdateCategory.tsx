import { FormEvent, useState } from "react";

export function UpdateCategory() {
  const [comment, setComment] = useState<string | null>(null);

  function handleSubmitContent(event: FormEvent) {
    event.preventDefault();

    console.log({
      comment,
    });
  }
  return (
    <>
      <form
        onSubmit={handleSubmitContent}
        className="relative top-12 my-4 w-full text-center flex flex-row gap-2 justify-between"
      >
        <select className="relative w-96 h[112] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none">
          <option className="absolute bg-black h-48" value=" ">
            COMIDA
          </option>

          <option className="absolute bg-black h-48" value=" ">
            FILME
          </option>
        </select>
        <br />
        <br />

        <input
          className="relative w-96 min-h[112] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none"
          type="text"
          placeholder="Categoria:"
          onChange={(event) => setComment(event.target.value)}
        />

        <footer className="absolute top-24 w-full flex gap-2 mt-2">
          <button
            type="submit"
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
          >
            Enviar
          </button>
        </footer>
      </form>
    </>
  );
}
