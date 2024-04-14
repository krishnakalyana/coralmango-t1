import Navbar from "../_components/Navbar";

export default function Layout({ children }) {

    return <div className="flex flex-col gap-2"> <Navbar /> {children}</div>
}