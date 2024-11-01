import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>Following are the routes,nested routes & dynamic routes;</p>
      <ul>
        <li>
        <Link href="/Product/product1">Product1</Link> <br></br>
        <Link href="/Category/Sports">Sports</Link> {/* if user want to directly connect with nested routes */} <br></br>
        <Link href="/Students/studentsName">Students Name</Link> {/* if user want to connect with the dynamic routes*/}
        </li><br></br>
      </ul>
    </div>
  )
}
