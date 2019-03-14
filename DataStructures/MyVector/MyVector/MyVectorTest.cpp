// MyVectorTest.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include "MyVector.h"
#include "MyVector.cpp"

int main()
{
    MyVector<int> myvec;
    myvec.push_back(1);
    myvec.push_back(2);
    std::cout << "before assignment: ";
    for (unsigned int i = 0; i < myvec.size(); i++) {
        std::cout << myvec[i] << ", ";
    }
    std::cout << std::endl << std::endl;

    MyVector<int> othervec(5);
    for (unsigned int i = 0; i < 5; i++) {
        othervec.push_back(i + 2);
    }

    myvec = othervec;
    std::cout << "after assignment: ";
    for (unsigned int i = 0; i < myvec.size(); i++) {
        std::cout << myvec[i] << ", ";
    }
    std::cout << std::endl << std::endl;

    std::cout << "copy constructor: ";
    MyVector<int> copyvec(myvec);
    for (unsigned int i = 0; i < copyvec.size(); i++) {
        std::cout << copyvec[i] << ", ";
    }
    std::cout << std::endl << std::endl;

    std::cout << "after pop_back: ";
    copyvec.pop_back();
    for (unsigned int i = 0; i < copyvec.size(); i++) {
        std::cout << copyvec[i] << ", ";
    }
    std::cout << std::endl << std::endl;

    std::cout << "front: " << copyvec.front() << std::endl << std::endl;
    std::cout << "back: " << copyvec.back() << std::endl << std::endl;

    std::cout << "initializer list: ";
    MyVector<int> initializerlistvec{ 5, 3, 2, 1 };
    for (unsigned int i = 0; i < initializerlistvec.size(); i++) {
        std::cout << initializerlistvec[i] << ", ";
    }
    std::cout << std::endl << std::endl;

    std::cout << "out of range exception: ";
    try {
        std::cout << initializerlistvec[5];
    }
    catch (std::out_of_range const& e) {
        std::cout << e.what();
    }
    std::cout << std::endl << std::endl;
    int x;
    std::cin >> x;

    return 0;
}

