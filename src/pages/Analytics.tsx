import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExpenseVisualization } from "@/components/ExpenseVisualization";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie } from 'recharts';
import { Button } from "@/components/ui/button";
import { Download, Share2, Zap } from "lucide-react";
import { useTheme } from "next-themes";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const data = [
  { name: 'Jan', amount: 2400, expenses: 1200 },
  { name: 'Feb', amount: 1398, expenses: 900 },
  { name: 'Mar', amount: 9800, expenses: 2800 },
  { name: 'Apr', amount: 3908, expenses: 1700 },
  { name: 'May', amount: 4800, expenses: 2100 },
  { name: 'Jun', amount: 3800, expenses: 1500 },
];

const pieData = [
  { name: 'Food', value: 400 },
  { name: 'Transport', value: 300 },
  { name: 'Shopping', value: 300 },
  { name: 'Entertainment', value: 200 },
];

export default function Analytics() {
  const { theme } = useTheme();
  const { toast } = useToast();
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAIAnalysis = async () => {
    setIsAnalyzing(true);
    // Simulated AI analysis
    setTimeout(() => {
      toast({
        title: "AI Analysis Complete",
        description: "Your spending patterns show potential savings in food expenses. Consider meal planning to reduce costs.",
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Analytics Dashboard</h1>
        <div className="space-x-4">
          <Button variant="outline" onClick={() => {
            toast({
              title: "Report Downloaded",
              description: "Your analytics report has been downloaded successfully.",
            });
          }}>
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button variant="outline" onClick={() => {
            toast({
              title: "Report Shared",
              description: "Your analytics report has been shared successfully.",
            });
          }}>
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
          <Button 
            onClick={handleAIAnalysis}
            disabled={isAnalyzing}
          >
            <Zap className="mr-2 h-4 w-4" />
            {isAnalyzing ? "Analyzing..." : "AI Analysis"}
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="col-span-full">
          <CardHeader>
            <CardTitle>3D Expense Overview</CardTitle>
          </CardHeader>
          <CardContent className="h-[400px]">
            <ExpenseVisualization />
          </CardContent>
        </Card>

        <Card className="col-span-full md:col-span-2">
          <CardHeader>
            <CardTitle>Monthly Spending Trends</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="amount" 
                  stroke={theme === 'dark' ? '#8884d8' : '#4c1d95'} 
                  strokeWidth={2}
                />
                <Line 
                  type="monotone" 
                  dataKey="expenses" 
                  stroke={theme === 'dark' ? '#82ca9d' : '#047857'} 
                  strokeWidth={2}
                />
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
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill={theme === 'dark' ? '#8884d8' : '#4c1d95'}
                  label
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="col-span-full md:col-span-2">
          <CardHeader>
            <CardTitle>Monthly Comparison</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar 
                  dataKey="amount" 
                  fill={theme === 'dark' ? '#8884d8' : '#4c1d95'} 
                />
                <Bar 
                  dataKey="expenses" 
                  fill={theme === 'dark' ? '#82ca9d' : '#047857'} 
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}