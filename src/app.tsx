import {Header} from "./components/header"
import { NewNoteCard } from "./components/new-note-card"
import { NoteCard } from "./components/note-card"

export function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">

      <Header />

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard />
        <NoteCard />
        <NoteCard />
      </div>
    </div>
  )
}
