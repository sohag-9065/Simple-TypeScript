import React, { ChangeEvent, FormEvent, useState } from 'react';

interface User{
    name: string,
    job: string
}

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [user, setUser] = useState<User | null>(null);



    const handleIncrease = (): void => {
        setCounter(counter + 1);
    }
    const handleDecrease = (): void => {
        setCounter(counter - 1);
    }

    const handleUserSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userData = {
            name : "Akash",
            job: "Jr. Dev"
        }
        setUser(userData);
    }

    const handleNameChange =(e: ChangeEvent<HTMLInputElement>) =>{

    }


    return (
        <div>
            <h1>This is Counter</h1>
            <h2>{counter}</h2>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
        </div>
    );
};

export default Counter;