import { Poppins } from "next/font/google";

const inter = Poppins({
  weight: ["100", "300", "400", "600", "700", "900"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={inter.className}>
      <h1 className="text-2xl font-extrabold">IWS</h1>
    </div>
  );
}
