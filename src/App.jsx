

function App() {


  return (
    <>
<main class="p-5">
  <h1 class="text-center text-lg text-green-600">HelloWorld</h1>
  <div class="my-4 w-full rounded-md border-2 border-violet-600 bg-violet-200 p-2">
    <p class="text-center font-mono font-extrabold">A div</p>
  </div>
  <div class="fixed bottom-0 right-0 h-10 w-10 bg-red-500"></div>
  <div class="flex justify-between">
    <div class="h-16 w-16 rounded-full bg-blue-500"></div>
    <div class="h-16 w-16 rounded-full bg-blue-500"></div>
    <div class="h-16 w-16 rounded-full bg-blue-500"></div>
    <div class="h-16 w-16 rounded-full bg-blue-500"></div>
  </div>
  <div class="mt-4 grid grid-cols-3 gap-4">
    <div class="h-16 bg-red-300"></div>
    <div class="h-16 bg-red-300"></div>
    <div class="h-16 bg-red-300"></div>
  </div>
  <div class="hidden md:block">
    <p>hii i waill apear in mid screen</p>
  </div>
  <div class="hidden max-md:block">
    <p>hii i waill apear in max screen</p>
  </div>
  <button class="my-2 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-800">Click Me</button>
  <ul class="my-2 space-y-2">
    <li class="bg-white p-2 first:bg-yellow-100">Item 1</li>
    <li class="bg-white p-2 first:bg-yellow-100 odd:bg-green-200 even:bg-slate-300">Item 2</li>
    <li class="bg-white p-2 first:bg-yellow-100 odd:bg-green-200 even:bg-slate-300">Item 3</li>
    <li class="bg-white p-2 first:bg-yellow-100 odd:bg-green-200 even:bg-slate-300">Item 4</li>
    <li class="bg-white p-2 first:bg-yellow-100 odd:bg-green-200 even:bg-slate-300">Item 5</li>
  </ul>
  {/* <!--Theme dark: --> */}
  <div class="m-10 rounded-lg bg-white px-6 py-8 shadow-xl ring-1 ring-slate-900/5 dark:bg-blue-950">
    <h3 class="text-base font-medium tracking-tight text-slate-900 dark:text-white">This is a text element</h3>
    <p class="mt-2 text-sm text-slate-500 dark:text-white">This is a even longer p tag element</p>

    <button class="mt-4 rounded-md bg-blue-100 px-2 py-2 text-blue-900" onclick="document.body.classList.toggle('dark')">Toggle dark mode</button>
  </div>
</main>
    </>
  )
}

export default App
