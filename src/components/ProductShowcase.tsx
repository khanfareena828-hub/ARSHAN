import { useState } from 'react';
import { 
  FolderKanban, 
  CheckSquare, 
  Users, 
  BarChart2, 
  Settings, 
  Bell, 
  Plus, 
  Search, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  MoreVertical, 
  TrendingUp,
  Sparkles,
  Layers,
  ChevronRight,
  Filter,
  Calendar
} from 'lucide-react';
import { motion } from 'motion/react';

interface Task {
  id: string;
  title: string;
  category: string;
  priority: 'High' | 'Medium' | 'Normal';
  status: 'In Progress' | 'Review' | 'Completed';
  assignee: { name: string; avatar: string };
  dueDate: string;
}

export function ProductShowcase() {
  const [activeTab, setActiveTab] = useState<'all' | 'in-progress' | 'completed'>('all');
  const [selectedProjectId, setSelectedProjectId] = useState('proj-1');

  const projects = [
    { id: 'proj-1', name: 'Mobile App 2.0 Redesign', progress: 78, tasksCount: 24, badge: 'Active' },
    { id: 'proj-2', name: 'Q3 Enterprise Onboarding', progress: 92, tasksCount: 18, badge: 'Near Complete' },
    { id: 'proj-3', name: 'Global Payment Gateway', progress: 45, tasksCount: 36, badge: 'In Review' },
  ];

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 't-1',
      title: 'Architect secure OAuth & SSO token bridge',
      category: 'Backend',
      priority: 'High',
      status: 'In Progress',
      assignee: { name: 'Aisha K.', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80' },
      dueDate: 'Today'
    },
    {
      id: 't-2',
      title: 'Design responsive analytics dashboard wireframes',
      category: 'UI/UX',
      priority: 'Medium',
      status: 'Review',
      assignee: { name: 'Rahul M.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80' },
      dueDate: 'Tomorrow'
    },
    {
      id: 't-3',
      title: 'Conduct team usability sprint with beta cohorts',
      category: 'Research',
      priority: 'Normal',
      status: 'Completed',
      assignee: { name: 'Sara T.', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&auto=format&fit=crop&q=80' },
      dueDate: 'Sep 18'
    },
    {
      id: 't-4',
      title: 'Setup automated Redis caching for real-time boards',
      category: 'DevOps',
      priority: 'High',
      status: 'In Progress',
      assignee: { name: 'Devon L.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80' },
      dueDate: 'Sep 21'
    }
  ]);

  const toggleTaskStatus = (id: string) => {
    setTasks(prev => prev.map(task => {
      if (task.id === id) {
        const nextStatus = task.status === 'Completed' ? 'In Progress' : 'Completed';
        return { ...task, status: nextStatus };
      }
      return task;
    }));
  };

  const filteredTasks = tasks.filter(task => {
    if (activeTab === 'in-progress') return task.status !== 'Completed';
    if (activeTab === 'completed') return task.status === 'Completed';
    return true;
  });

  const selectedProject = projects.find(p => p.id === selectedProjectId) || projects[0];

  return (
    <section id="product" className="py-24 bg-[#F7F8FC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs text-xs font-bold text-[#4F7CFF]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LIVE INTERACTIVE SHOWCASE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1020] tracking-tight">
            Inside the Launchly Workspace
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Experience our streamlined UI. Click tasks to toggle completion, switch between projects, and see how intuitive teamwork feels.
          </p>
        </div>

        {/* Prototype Application Frame */}
        <div className="rounded-3xl bg-white border border-slate-200/90 shadow-2xl overflow-hidden">
          
          {/* Top Window Bar */}
          <div className="px-6 py-4 bg-[#0B1020] text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="hidden sm:flex items-center gap-2 pl-4 text-xs font-medium text-slate-400">
                <span className="text-white font-bold flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-[#4F7CFF]" />
                  Launchly OS
                </span>
                <span>/</span>
                <span>Workspace: Acme Innovations</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-800/60 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Sync Active (Live)
              </span>
            </div>
          </div>

          {/* Main Prototype Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
            
            {/* Sidebar Navigation */}
            <div className="lg:col-span-3 border-r border-slate-200/80 bg-slate-50/70 p-5 flex flex-col justify-between">
              <div className="space-y-6">
                
                {/* User quick pill */}
                <div className="flex items-center gap-3 p-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=90&auto=format&fit=crop&q=80" 
                    alt="Aisha" 
                    className="w-9 h-9 rounded-xl object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-[#0B1020] truncate">Aisha Khan</div>
                    <div className="text-[10px] text-slate-500 truncate">Product Director</div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>

                {/* Nav Links */}
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2 px-2">
                    WORKSPACE NAVIGATION
                  </div>
                  <nav className="space-y-1">
                    <button className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold bg-[#4F7CFF] text-white shadow-xs">
                      <div className="flex items-center gap-2.5">
                        <FolderKanban className="w-4 h-4" />
                        <span>Active Projects</span>
                      </div>
                      <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-white/20">3</span>
                    </button>

                    <button className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors">
                      <div className="flex items-center gap-2.5">
                        <CheckSquare className="w-4 h-4" />
                        <span>Task Backlog</span>
                      </div>
                      <span className="text-[10px] text-slate-400">42</span>
                    </button>

                    <button className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors">
                      <div className="flex items-center gap-2.5">
                        <Users className="w-4 h-4" />
                        <span>Team Roster</span>
                      </div>
                      <span className="text-[10px] text-emerald-600 font-bold">12 online</span>
                    </button>

                    <button className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors">
                      <div className="flex items-center gap-2.5">
                        <BarChart2 className="w-4 h-4" />
                        <span>Sprint Analytics</span>
                      </div>
                    </button>
                  </nav>
                </div>

                {/* Project List Selector */}
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2 px-2">
                    PROJECTS
                  </div>
                  <div className="space-y-1.5">
                    {projects.map((proj) => (
                      <button
                        key={proj.id}
                        onClick={() => setSelectedProjectId(proj.id)}
                        className={`w-full text-left p-2.5 rounded-xl text-xs transition-all ${
                          selectedProjectId === proj.id
                            ? 'bg-white border border-[#4F7CFF]/50 shadow-xs font-bold text-[#0B1020]'
                            : 'text-slate-600 hover:bg-slate-100 border border-transparent font-medium'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="truncate">{proj.name}</span>
                          <span className="text-[10px] text-slate-400">{proj.progress}%</span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-slate-200">
                          <div 
                            className="h-full rounded-full bg-[#4F7CFF]" 
                            style={{ width: `${proj.progress}%` }} 
                          />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Productivity Information Widget */}
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs mt-6">
                <div className="flex items-center justify-between text-xs font-bold text-slate-800 mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                    Productivity
                  </span>
                  <span className="text-emerald-600 text-[11px] font-bold">+28%</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-tight">
                  Team finished 18 tasks ahead of sprint estimate this week.
                </p>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-9 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                {/* Project Header and Controls */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B1020]">
                        {selectedProject.name}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#4F7CFF]/10 text-[#4F7CFF]">
                        {selectedProject.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      Tracking {selectedProject.tasksCount} deliverables • Sprint ends Friday
                    </p>
                  </div>

                  {/* Filter Pills */}
                  <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
                    <button
                      onClick={() => setActiveTab('all')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        activeTab === 'all' ? 'bg-white text-[#0B1020] shadow-xs' : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      All Tasks ({tasks.length})
                    </button>
                    <button
                      onClick={() => setActiveTab('in-progress')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        activeTab === 'in-progress' ? 'bg-white text-[#0B1020] shadow-xs' : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      In Progress
                    </button>
                    <button
                      onClick={() => setActiveTab('completed')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        activeTab === 'completed' ? 'bg-white text-[#0B1020] shadow-xs' : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      Completed
                    </button>
                  </div>
                </div>

                {/* Interactive Task Cards Grid */}
                <div className="mt-6 space-y-3">
                  {filteredTasks.map((task) => {
                    const isDone = task.status === 'Completed';

                    return (
                      <div
                        key={task.id}
                        onClick={() => toggleTaskStatus(task.id)}
                        className={`group p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                          isDone 
                            ? 'bg-slate-50/80 border-slate-200/60 opacity-70' 
                            : 'bg-white border-slate-200/80 hover:border-[#4F7CFF]/60 hover:shadow-md'
                        }`}
                      >
                        <div className="flex items-center gap-3.5 min-w-0">
                          <button
                            type="button"
                            className={`w-6 h-6 rounded-lg flex items-center justify-center transition-colors shrink-0 ${
                              isDone ? 'bg-emerald-500 text-white' : 'border-2 border-slate-300 group-hover:border-[#4F7CFF]'
                            }`}
                          >
                            {isDone && <CheckCircle2 className="w-4 h-4" />}
                          </button>
                          <div className="min-w-0">
                            <p className={`text-sm font-semibold truncate ${isDone ? 'line-through text-slate-400' : 'text-slate-800'}`}>
                              {task.title}
                            </p>
                            <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-400">
                              <span className="font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded">
                                {task.category}
                              </span>
                              <span>Due: {task.dueDate}</span>
                              <span className={`font-semibold ${
                                task.priority === 'High' ? 'text-rose-500' : 'text-slate-500'
                              }`}>
                                • {task.priority} Priority
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Assignee and status indicator */}
                        <div className="flex items-center gap-3 shrink-0">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                            isDone 
                              ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' 
                              : task.status === 'Review'
                              ? 'bg-amber-50 text-amber-600 border border-amber-200'
                              : 'bg-blue-50 text-[#4F7CFF] border border-blue-200'
                          }`}>
                            {task.status}
                          </span>
                          <img 
                            src={task.assignee.avatar} 
                            alt={task.assignee.name} 
                            className="w-8 h-8 rounded-full border border-slate-200 object-cover"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Analytics & Progress Bar */}
              <div className="mt-8 pt-6 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="text-[11px] font-medium text-slate-500 mb-1">Project Completion</div>
                  <div className="flex items-center justify-between text-base font-extrabold text-[#0B1020]">
                    <span>{selectedProject.progress}% Done</span>
                    <span className="text-xs font-bold text-emerald-600">On Track</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="text-[11px] font-medium text-slate-500 mb-1">Active Team Members</div>
                  <div className="flex items-center justify-between text-base font-extrabold text-[#0B1020]">
                    <span>6 Assignees</span>
                    <span className="text-xs font-bold text-[#4F7CFF]">100% Capacity</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="text-[11px] font-medium text-slate-500 mb-1">Current Sprint Burn</div>
                  <div className="flex items-center justify-between text-base font-extrabold text-[#0B1020]">
                    <span>94.6% Accuracy</span>
                    <span className="text-xs font-bold text-purple-600">Optimal</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
