fn main() {
    arr();
    tup();
}

fn arr() {
    println!("Demonstration of Arrays: ");
    let a: [i32; 6] = [42, 57, 95, 21, 32, 85];
    println!("Array Elements: {:?}", a);
    println!("Accessing 5th element: ");
    println!("5th element = {}", a[4]);
}

fn tup() {
    println!("\nDemonstration of Tuples: ");
    let b: (&str, i32, bool) = ("Harish", 20, true);
    println!("Tuple Elements: {:?}", b);
    println!("Accessing 2nd Element: ");
    println!("2nd Element = {}", b.1);
}
