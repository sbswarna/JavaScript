let re = /hello/;
console.log(re); //gives the regular expression
console.log(re.source); //gives the pattern only.

//exec() = returns array if the string has a match with re, null otherwise
let text = 'world';
console.log(re.exec(text));

text = 'hello world';
let result = re.exec(text);
console.log(result);
console.log(result[0]);
console.log(result.index);
console.log(result.input);

//test() = returns true/false according to match result
text = 'Hello World'
result = re.test(text);
console.log(result); //result is false because of case sensitivity

re =/hello/i //i for ignoring case
result = re.test(text);
console.log(result); //gives true because of i

//match() = gives an array or null
text = 'Hello World'
result = text.match(re);
console.log(result); //['matched string', 'index', 'input']

//search() = returns the index of the first match, negative if no match found
text = 'Hello World'
result = text.search(re);
console.log(result);

text = 'World'
result = re.test(text);
console.log(result);

//replace() = finds matches and replace them with new string
text = 'Hello World'
result = text.replace(re, 'hi') ;
console.log(result);

re = /^h/i //^ = must start with
text = 'Hello World'
result = re.test(text) ;
console.log(result);

text = 'ello World'
result = re.test(text) ;
console.log(result);

re = /world$/i //$ = must end with
text = 'Hello World'
result = re.test(text) ;
console.log(result);

text = 'hello Worl'
result = re.test(text) ;
console.log(result);

re = /wor.d/i //. = matches any one character. should be exactly one
text = 'Hello World'
result = re.test(text) ;
console.log(result); //will match

re = /wor.d/i //. = matches any one character. should be exactly one
text = 'Hello Worrd'
result = re.test(text) ;
console.log(result); //will match

re = /wor.d/i //. = matches any one character. should be exactly one
text = 'Hello Worlld'
result = re.test(text) ;
console.log(result); //will not match

re = /wor*d/i //* = matches one character. any number of characters
text = 'Hello Word'
result = re.test(text) ;
console.log(result); //will match

re = /wor*d/i 
text = 'Hello Worrd'
result = re.test(text) ;
console.log(result); //will match

re = /wor*d/i 
text = 'Hello Worrrd'
result = re.test(text) ;
console.log(result); //will match

re = /wor?ld/i //? = optional character
text = 'Hello World'
result = re.test(text) ;
console.log(result); //will match

re = /wor?ld/i 
text = 'Hello Wold'
result = re.test(text) ;
console.log(result); //will match

re = /wor?ld/i 
text = 'Hello Wopld'
result = re.test(text) ;
console.log(result); //will not match


re = /wor\?ld/i // \ = escape character
text = 'Hello Wor?ld'
result = re.test(text) ;
console.log(result); //will match


//Brackets [] = character set
re = /wor[lo]d/i // must be l or o
text = 'Hello World'
result = re.test(text) ;
console.log(result); //will match

text = 'Hello Worpd'
result = re.test(text) ;
console.log(result); //will not match

re = /wor[a-z]d/ // anything within a to z
text = 'Hello World'
result = re.test(text) ;
console.log(result); //will match

re = /wor[^lo]d/i // matches with anything except l and o
text = 'Hello Worpd'
result = re.test(text) ;
console.log(result); //will match

text = 'Hello World'
result = re.test(text) ;
console.log(result); //will not match


// {} = quatifiers
re = /Hel{2}o/i // {2} indicates the number of l that should match
text = 'Hello World'
result = re.test(text) ;
console.log(result); //will match

text = 'Helo World'
result = re.test(text) ;
console.log(result); //will not match

re = /Hel{2,4}o/i // {2,4} indicates the number of l that should match must be between 2 to 4
text = 'Helllo World'
result = re.test(text) ;
console.log(result); //will match

text = 'Helo World'
result = re.test(text) ;
console.log(result); //will not match

re = /Hel{2,}o/i // {2,} indicates the number of l that should match must be >= 2
text = 'Hellllllllllllllllllllllllllllllllllllllllo World'
result = re.test(text) ;
console.log(result); //will match

text = 'Helo World'
result = re.test(text) ;
console.log(result); //will not match

// () = grouping
re = /He(lo){2}/i // indicates that l and o must occur together at least for 2 times
text = 'Helolo World'
result = re.test(text) ;
console.log(result); //will match

text = 'Helo World'
result = re.test(text) ;
console.log(result); //will not match

//Shorthand character classes
// \w = one word character (any alphanumeric or _)
re = /\w/i 
text = 'H'
result = re.test(text) ;
console.log(result); //will match

text = '-'
result = re.test(text) ;
console.log(result); //will not match

// \w+ = one or more word character (any alphanumeric or _)
re = /\w+/i 
text = 'Hksjfsl'
result = re.test(text) ;
console.log(result); //will match

// \W = one non-word character (anything except alphanumeric or _)
re = /\W/i 
text = '%'
result = re.test(text) ;
console.log(result); //will match

text = '_'
result = re.test(text) ;
console.log(result); //will not match

// \d = digit only
re = /\d/i 
text = '8'
result = re.test(text) ;
console.log(result); //will match

text = 's'
result = re.test(text) ;
console.log(result); //will not match

// \D = non digit only
re = /\D/i 
text = 'i'
result = re.test(text) ;
console.log(result); //will match

text = '7'
result = re.test(text) ;
console.log(result); //will not match

// \s = one whitespace char
re = /\s/i 
text = ' '
result = re.test(text) ;
console.log(result); //will match

text = '7'
result = re.test(text) ;
console.log(result); //will not match

// \S = non space only
re = /\S/i 
text = 'i'
result = re.test(text) ;
console.log(result); //will match

text = ' '
result = re.test(text) ;
console.log(result); //will not match

// \b = word boundary. looks for exact same word
re = /Hello\b/i 
text = 'Hello world'
result = re.test(text) ;
console.log(result); //will match

text = 'Helloooo'
result = re.test(text) ;
console.log(result); //will not match

//Assertion = like conditional statements
re = /x(?=y)/i //matches if x is followed by y only
text = 'xyz'
result = re.test(text) ;
console.log(result); //will match

text = 'xpy'
result = re.test(text) ;
console.log(result); //will not match

re = /x(?!y)/i //matches if x is not followed by y only
text = 'xz'
result = re.test(text) ;
console.log(result); //will match

text = 'xy'
result = re.test(text) ;
console.log(result); //will not match