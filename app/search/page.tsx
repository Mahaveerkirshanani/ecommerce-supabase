"use client"
import MainLayout from '@/components/Layout/MainLayout';
import { useSearchParams } from 'next/navigation';

const SearchPage = ()=> {
  const searchParams = useSearchParams();
  const query = searchParams.get('category') || '';

  return (
    <MainLayout>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Search Results</h1>
      {query ? (
        <p className="text-lg">You searched for: <span className="font-semibold">{query}</span></p>
      ) : (
        <p className="text-lg text-red-500">No search query provided.</p>
      )}
      {/* Render search results based on the query */}
    </div>
    </MainLayout>
  );
}

export default SearchPage
