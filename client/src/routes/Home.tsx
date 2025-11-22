import { Link } from "react-router";
import Container from "../components/Container";
import { useState, type FormEvent } from "react";

export default function Home() {
  const [accomplishment, setAccomplishment] = useState("");

  return (
    <div className="w-screen min-h-screen">
      <div className="w-screen bg-lime-700 text-white text-lg">
        <Container className="py-4">
          <Link to="/" className="font-medium">
            ResuLog
          </Link>
        </Container>
      </div>
      <Container className="pt-4">
        <form
          onSubmit={handleAccomplishmentSubmit}
          className="bg-lime-100 p-4 rounded-lg shadow flex flex-between gap-4"
        >
          <textarea
            value={accomplishment}
            onChange={(e) => setAccomplishment(e.target.value)}
            placeholder="Enter your accomplishments"
            className="w-full rounded-lg shadow border-gray-50 px-4 py-2"
          ></textarea>
          <button
            type="submit"
            className="bg-lime-700 text-white px-4 py-2 rounded-lg shadow"
          >
            Add
          </button>
        </form>
      </Container>
    </div>
  );

  async function handleAccomplishmentSubmit(ev: FormEvent) {
    ev.preventDefault();
    if (!accomplishment) {
      return;
    }

    // TODO Handle accomplishment submit
  }
}
