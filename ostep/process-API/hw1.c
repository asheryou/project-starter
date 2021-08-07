#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

int
main(int argc, char *argv[])
{
    int x = 1;
    printf("init x = %d\n", x);
    int rc = fork();
    if (rc < 0) {
        // fork failed; exit
        fprintf(stderr, "fork failed\n");
        exit(1);
    } else if (rc == 0) {
        // child (new process)
        printf("child x = %d\n",++x);
    } else {
        // parent goes down this path (original process)
        printf("parent x = %d\n",--x);
    }
    return 0;
}
