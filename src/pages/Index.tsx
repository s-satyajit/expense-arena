import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExpenseVisualization } from "@/components/ExpenseVisualization";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Index = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's your expense overview.</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Expense
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$2,450.85</p>
            <p className="text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Monthly Budget</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$4,000.00</p>
            <p className="text-muted-foreground">38.7% utilized</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Savings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$1,549.15</p>
            <p className="text-muted-foreground">Projected: $2,000</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Expense Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <ExpenseVisualization />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex justify-between items-center p-4 rounded-lg bg-secondary">
                  <div>
                    <p className="font-medium">Grocery Shopping</p>
                    <p className="text-sm text-muted-foreground">Today at 2:30 PM</p>
                  </div>
                  <p className="font-bold">-$85.50</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;