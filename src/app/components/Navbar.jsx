import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg py-4 px-8 flex justify-between items-center" dir="rtl">
      <h1 className="text-3xl font-extrabold text-white tracking-wide">RazaShop</h1>
      <div className="space-x-6">
        <Link href="/" className="text-white font-medium hover:text-gray-200 transition duration-300">الرئيسية</Link>
        <Link href="/categories" className="text-white font-medium hover:text-gray-200 transition duration-300">التصنيفات</Link>
        <Link href={'/about'} className="text-white font-medium hover:text-gray-200 transition duration-300">من نحن</Link>
        <Link href={'/contact'} className="text-white font-medium hover:text-gray-200 transition duration-300">اتصل بنا</Link>
      </div>
    </nav>
  );
}
