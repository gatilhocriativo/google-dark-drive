import { SearchBar } from '@/components/SearchBar';

export default function Home() {
  return (
    <div className="flex flex-col items-center h-full">
      <h2 className="mb-8 text-2xl">Olá! Este é o Google Dark Drive</h2>
      <div className="flex flex-col justify-center">
        <SearchBar />
      </div>
      <div>pastas</div>
    </div>
  );
}
