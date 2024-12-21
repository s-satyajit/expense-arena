import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExpenseVisualization } from "@/components/ExpenseVisualization";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', amount: 2400 },
  { name: 'Feb', amount: 1398 },
  { name: 'Mar', amount: 9800 },
  { name: 'Apr', amount: 3908 },
  { name: 'May', amount: 4800 },
  { name: 'Jun', amount: 3800 },
];

export default function Analytics() {
  return (
    <div className="space-y-8 animate-fade-in">
      <h1 className="text-4xl font-bold">Analytics Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle>Expense Overview</CardTitle>
          </CardHeader>
          <CardContent className="h-[400px]">
            <ExpenseVisualization />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Monthly Spending</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="amount" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Expense Categories</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="amount" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}