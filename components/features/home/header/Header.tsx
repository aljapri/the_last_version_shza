import React from 'react'

import "./header.css";
export default function Header() {
  return (
    <main className="center z-0 ">
      <section className="hero bg-cover bg-center h-screen text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold max-xl:text-2xl">مرحبا بكم في شذى الشام</h1>
          <p className="mt-4 text-3xl max-xl:text-xl">منتجات غذائية عالية الجودة</p>

        </div>
      </section>
    </main>
  );
}
