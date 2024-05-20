import siteMetadata from '../../data/siteMetadata'
import headerNavLinks from '../../data/headerNavLinks'
import Link from '../Link'
import MobileNav from "../MobileNav";

export default function Header() {
    return (
        <header className="flex items-center justify-between py-10">
            <div>
                <Link href="/" aria-label={siteMetadata.headerTitle}>
                    <div className="flex items-center justify-between">
                        <div className="mr-3"> {/*<Logo />*/}</div>
                        {typeof siteMetadata.headerTitle === 'string' ? (
                            <div className="z-50 mb-3 h-6 text-3xl font-semibold sm:block">
                                {siteMetadata.headerTitle}
                            </div>
                        ) : (
                            siteMetadata.headerTitle
                        )}
                    </div>
                </Link>
            </div>
            <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
                {headerNavLinks
                    .filter((link) => link.href !== '/')
                    .map((link) => (
                        <Link
                            key={link.title}
                            href={link.href}
                            className="hidden font-medium text-blue-500 hover:text-blue-300 dark:text-pink-500 dark:hover:text-pink-300 sm:block"
                        >
                            {link.title}
                        </Link>
                    ))}
                <MobileNav />
            </div>
        </header>
    );
};