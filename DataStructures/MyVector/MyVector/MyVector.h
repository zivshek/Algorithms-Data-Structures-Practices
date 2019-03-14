#pragma once
#include <initializer_list>

template <typename T>
class MyVector {
private:
    T * _data;
    unsigned int _size;
    unsigned int _capacity;

public:
    MyVector();
    MyVector(std::initializer_list<T>);
    MyVector(unsigned int size);
    MyVector(MyVector<T> const&);
    ~MyVector();

    bool empty() const;
    unsigned int size() const;
    void push_back(T const&);
    void pop_back();
    void clear();
    T& front() const;
    T& back() const;
    T& operator[] (unsigned int index);
    MyVector<T>& operator= (MyVector<T> const&);

private:
    void expand();
};
