fn main() {
    // While loop
    let mut count = 0;
    while count < 5 {
        println!("While loop count: {}", count);
        count += 1;
    }

    // For loop
    for i in 1..=5 {
        println!("For loop count: {}", i);
    }

    // Loop with break
    let mut i = 0;
    loop {
        println!("Loop count: {}", i);
        i += 1;
        if i >= 5 {
            break;
        }
    }

    // Conditional loop - while let
    let mut optional_number = Some(5);
    while let Some(number) = optional_number {
        println!("Conditional loop: {}", number);
        optional_number = None;
    }
}
