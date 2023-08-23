fn fun1(s: String){
    println!("This '{}'value is passed from Main Function\n",s);
}

fn fun2(t: i64) -> i64{
    t*t*t
}

fn main() {
    println!("Assigning Values to Variables");
    let x = 5;
    let y = x;
    println!("Assigned Values are: x = {}, y = {}\n",x,y);

    println!("Passing Values to Functions");
    let i = String::from("Harish");
    fun1(i);

    println!("Returning Values from Functions");
    let z = fun2(x);
    println!("The returned Value from Function is = {}",z);
}