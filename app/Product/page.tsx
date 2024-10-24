import Link from "next/link"
const Product = () => {
    return(
        <div>
            <h1>Its a product page</h1>
            <Link href="/Product/product1">Product1</Link> <br></br>
            <Link href="/Category/Sports">Sports</Link> {/* if user want to directly connect with nested routes */} <br></br>
            <Link href="/Students/studentsName">Students Name</Link> {/* if user want to connect with the dynamic routes*/}
        </div>
    )
}
export default Product