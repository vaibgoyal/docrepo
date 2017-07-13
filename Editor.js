//testing AQDataReader
println("Fixed width:");
var rd = AQRuntime.getDataReader("string");
var ws = new Array(4,4,4);
rd.setFixedColumnWidths(ws);
rd.setInputString("1   2   3   \na   b   c   ");
println(rd.getNextRow());
println(rd.getNextRow());

sdfgsdfgsdg
println("\nCell delimiter:");
var rd = AQRuntime.getDataReader("string");
rd.setCellDelimiter(",");
rd.setFirstLineContainsColumnNames(true);
rd.setInput("col1,col2,col3 aaa\na,b,c\n1,2,3");

println(rd.getNextRow());
k