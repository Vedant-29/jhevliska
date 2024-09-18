import GiftCardList from "@/components/gift-list";

export default function SelectionPage() {
  return (
    <div className="min-h-screen bg-pink-50 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 mt-4">Select your gifts</h1>
      <div className="bg-white shadow-lg p-6 rounded-lg max-w-4xl">
        <GiftCardList />
      </div>
    </div>
  );
}
