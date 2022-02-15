# 文件格式

[生信中常见的数据文件格式](https://cloud.tencent.com/developer/article/1658316)

主要是文章摘录，以个人了解为目的，文字描述可能不准确，可看原文

## fastq

fasta+测序质量信息，目前已经成为高通量测序结果的事实标准。

## fasta

核苷酸序列或多肽序列的文本格式，在 NCBI 查看基因的的时候通常就有 fasta 格式 genebank 格式。

## SAM/BAM

sequence alignment/map format

测序得到的 fastq 数据 map 到基因组之后，会得到一个以 sam 或 bam 为扩展名的文件。

由于 sam 格式的文件通常都非常大，所以为了节省存储空间而将 sam 转换为二进制格式以便于存储，也就是 bam 文件。sam/bam 文件可以由特定的一些软件（比如 samtools）来处理的，包括格式互转、排序、建立索引等操作。

mapping是什么[深度测序数据分析 Step1（Reads mapping）](http://www.bioinfo.online/article/567a0cbd-3619-4b25-a4ed-9f35e512e378.html)

> Reads Mapping：指将测序得到的 DNA 片段——reads，定位到参考基因组上。

[测序数据的格式，了解一下](https://mp.weixin.qq.com/s/HrNjY3emGjHt9YpAhtZdJw)

> 介绍三种文件格式：1.fasta。2.fastq。3.sam

## GTF GFF

GTF全称是Gene transfer format，用于储存基因结构信息，共9列表格。（怎么打开？）

GFF全称为general feature format，用来注释基因组，共9列的纯文本文件。

个人总结：2者都是用来描述基因结构，开始位点，结束位点，类型之类的信息，2者列略有不同

[gff/gtf格式简介](http://www.biotrainee.com/thread-2705-1-2.html)

## BED

作用和GFF类似

是ucsc 的genome browser的一个格式 ,提供了一种灵活的方式来定义的数据行，以用来描述注释信息

[Data File Formats](https://genome.ucsc.edu/FAQ/FAQformat#format1)

[bed文件格式解读](http://www.biotrainee.com/thread-2707-1-1.html)，文章列表里有别的格式

## VCF

Variant Call Format

伴随着大规模的基因分型及测序工程的产生(例如1000 Genomes Project),之前的信息贮存格式例如gff文件它记录了每一个基因的详细信息，其中许多基因信息在基因组之间是共享的，而我们需要记录的仅仅是不同基因组之间变异的地方，因此这些格式会显得格外冗余。这就迫切需要一种新的格式来记录高效的记录这些变异信息。VCF(Variant Call Format)就是这样一种用来贮存基因序列变异信息的文本文件(通常是压缩格式)。

[vcf格式解读](http://www.biotrainee.com/thread-2708-1-2.html)