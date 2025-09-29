const loadTodo = async () => {
    const url = "https://jsonplaceholder.typcode.com/todos";
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
}
// সিরিয়াল মেইনটেইন করে কোড রান করার জন্য async & await ব্যবহার করা হয়।
// async → function-কে বলে “এটা সিরিয়ালভাবে কোড রান হবে”।
// await → বলে “এই লাইন শেষ না হওয়া পর্যন্ত অপেক্ষা করো”।