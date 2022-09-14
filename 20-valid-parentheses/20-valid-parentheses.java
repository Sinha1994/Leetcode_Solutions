class Solution {
    public boolean isValid(String s) {
        if(s.length()%2 != 0) return false;
        HashMap <Character, Character> bracket = new HashMap<Character, Character>();
        bracket.put('(',')');
        bracket.put('{','}');
        bracket.put('[',']');
        Stack<Character> stack = new Stack<Character>();
        for(int i=0;i<s.length();i++) {
            Character ch = s.charAt(i);
            if(ch == '(' || ch == '{' || ch == '['){
                stack.push(ch);
            }
            else {
                if(stack.isEmpty()) {
                    return false;
                }
                if(bracket.get(stack.pop()).equals(ch)) {
                    continue;
                } else {
                    return false;
                }
            }

        }
        return stack.isEmpty();
    }
}