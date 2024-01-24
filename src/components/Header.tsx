import { signOut } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Search from './Search';
import MobileMenu from './MobileMenu';

const Header = () => {
    const router = useRouter();

    const handleLogoutClick = async () => {
        await signOut();
        router.push('/');
    };

    return (
        <header className="relative flex h-16 items-center justify-between border-b border-gray-300 py-4">
            <Link href="/" className="ml-1 pl-4 text-xl font-bold sm:hidden">
                LifeHub Links
            </Link>
            <Search />
            <MobileMenu />
        </header>
    );
};

export default Header;
