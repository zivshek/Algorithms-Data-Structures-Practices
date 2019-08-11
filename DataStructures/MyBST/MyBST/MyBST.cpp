
#include <iostream>

class Node {

public:
	Node(int val) : value(val) {

	}

	int value;
	Node* left = nullptr;
	Node* right = nullptr;
};

using namespace std;
void destruct(Node* n) {
	if (n) {
		destruct(n->left);
		destruct(n->right);
		delete n;
	}
}

void visit(Node* node) {

	if (node) {
		cout << node->value << endl;
		visit(node->left);
		visit(node->right);
	}
	else cout << "null" << endl;
}

void addNode(int v, Node* root) {

	Node* n = root;

	while (n) {
		if (v < n->value) {
			if (!n->left) {
				n->left = new Node(v);
				break;
			}
			else {
				n = n->left;
			}
		}
		else if (v > n->value) {
			if (!n->right) {
				n->right = new Node(v);
				break;
			}
			else {
				n = n->right;
			}
		}

		int bp = 1;
	}
	int bp2 = 2;
}

int main()
{
	Node* root = new Node(5);

	addNode(6, root);
	addNode(50, root);
	addNode(30, root);
	addNode(1, root);
	addNode(8, root);
	addNode(76, root);
	addNode(23, root);

	visit(root);

	destruct(root);
}



