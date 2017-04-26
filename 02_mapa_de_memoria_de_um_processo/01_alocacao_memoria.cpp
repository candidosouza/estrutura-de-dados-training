#include <stdlib.h>
#include <stdio.h>

char *s;
int *r;
int *z;

int main()
{
	s = (char *) malloc(2000);
	if (s==NULL) {
		printf("\nErro de alocação de memória");
		exit(1);
	}

	r = (int *) malloc(40*sizeof(int));
	if (r==NULL) {
		printf("\nErro de alocação de memória");
		exit(1);
	}

	z = (int *) calloc(40, sizeof(int));
	if (z==NULL) {
		printf("\nErro de alocação de memória");
		exit(1);
	}

	free(z);
	free(r);
	free(s);
}