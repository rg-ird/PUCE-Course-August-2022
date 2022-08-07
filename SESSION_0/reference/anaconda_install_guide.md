# How to install Anaconda

In order to fully engage in this course, a working [Anaconda](https://www.anaconda.com/) environment is needed with [Jupyter](https://jupyter.org/) notebook installed. This document provides a brief setup guide including a list of bioinformatics tools which will be covered.

First download a Python3.8 Anaconda installer from [here](https://www.anaconda.com/products/individual), choosing either MacOS (command line installer) or Linux. Run the following commands from the terminal and follow the instructions at hand:
```bash
cd Downloads  # or directory in which you have downloaded the installer
sh Anaconda3-2020.11-Linux-x86_64.sh  # or sh Anaconda3-2020.11-MacOSX-x86_64.sh
```

Afterwards, restart your terminal and run the following commands to setup Anaconda:
```bash
conda activate
conda config --add channels defaults
conda config --add channels bioconda
conda config --add channels conda-forge
conda update --all -y
```

You can try out Jupyter by typing the following commands:
```bash
conda activate
jupyter notebook
```

Below is the list of bioinformatics tools which will be covered throughout this course. To install a package run the following command:
```bash
conda install pkgname -y
```
If any of the packages is not compatible with the current Anaconda environment, you should create a new one and install it there with:
```bash
conda create --name pkgname pkgname -y
```
The packages are:
- [bandage](https://bioconda.github.io/recipes/bandage/README.html)
- [busco](https://bioconda.github.io/recipes/busco/README.html)
- [canu](https://bioconda.github.io/recipes/canu/README.html)
- [diamond](https://bioconda.github.io/recipes/diamond/README.html)
- [edlib](https://bioconda.github.io/recipes/edlib/README.html)
- [flye](https://bioconda.github.io/recipes/flye/README.html)
- [graphmap2](https://bioconda.github.io/recipes/graphmap/README.html)
- [igv](https://bioconda.github.io/recipes/igv/README.html)
- [medaka](https://bioconda.github.io/recipes/medaka/README.html)
- [miniasm](https://bioconda.github.io/recipes/miniasm/README.html)
- [minimap2](https://bioconda.github.io/recipes/minimap2/README.html)
- [mummer](https://bioconda.github.io/recipes/mummer/README.html)
- [nanopolish](https://bioconda.github.io/recipes/nanopolish/README.html)
- [prodigal](https://bioconda.github.io/recipes/prodigal/README.html)
- [quast](https://bioconda.github.io/recipes/quast/README.html)
- [racon](https://bioconda.github.io/recipes/racon/README.html)
- [raven-assembler](https://bioconda.github.io/recipes/raven-assembler/README.html)
- [samtools](https://bioconda.github.io/recipes/samtools/README.html)
- [shasta](https://bioconda.github.io/recipes/shasta/README.html)
- [spoa](https://bioconda.github.io/recipes/spoa/README.html)
- [wtdbg](https://bioconda.github.io/recipes/wtdbg/README.html)

Supporting packages:
- biopython
- cmake
- gcc_linux-64
- git
- gxx_linux-64
- h5py
- ipykernel
- jupyter
- make
- networkx
- numpy
- pygraphviz
- r
- seaborn
- snakemake
- zlib

The best way is to create environments per session as following:
```
conda create --name session_0_1_2 -y jupyter seaborn h5py biopython edlib cmake make gcc_linux-64 gxx_linux-64 networkx minimap2 pandas samtools igv git numpy

conda create --name session_3 -y jupyter miniasm bandage gepard seaborn networkx cmake make gcc_linux-64 gxx_linux-64 biopython git ipykernel

conda create --name session_4 -y jupyter medaka=1.0.3 mummer pygraphviz racon minimap2 spoa minimap2 flye wtdbg samtools

conda create --name session_4_nanopolish -y jupyter samtools nanopolish

conda create --name session_5 -y jupyter snakemake diamond prodigal r minimap2 git make gcc_linux-64 zlib

conda create --name session_5_quast -y jupyter quast

conda create --name session_5_busco -y busco jupyter

conda create --name session_6 -y jupyter canu flye wtdbg shasta mummer raven-assembler
```
