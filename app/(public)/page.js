import LoginCard from "./_loginComponents/LoginCard";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-full sm:w-6/12 md:w-4/12">
        <LoginCard />
      </div>
    </div>
  );
}
