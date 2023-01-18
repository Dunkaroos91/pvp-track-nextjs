import Nav from './Nav'

export default function Layout({ children }) {
    return (
        <div className="mx-2 md:max-w-2xl md:mx-auto font-poppin">
            <Nav />
            <main>{children}</main>
        </div>
    );
}