import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Plus, LogIn, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { toast } from '@/components/ui/use-toast';
import { SvgLogo } from '@/components/SvgLogo';
import LoginModal from '@/components/LoginModal';

const Header = ({
  onShowAddForm,
  onToggleFilters
}) => {

  const [showLogin, setShowLogin] = useState(false);
  const {
    isAdmin,
    loginAsAdmin,
    logout
  } = useAuth();

  const handleAdminLogin = (username, password) => {
    if (username === 'admin' && password === '1234') {
      loginAsAdmin();
      setShowLogin(false);
    } else {
      toast({
        title: "Credenciales incorrectas",
        description: "Usuario o contraseña incorrectos.",
        variant: "destructive"
      });
    }
  };

  const handleAdminLogout = () => {
    logout();
    toast({
      title: "¡Sesión cerrada!",
      description: "Has salido del modo administrador."
    });
  };

  return (
    <>
      <header className="bg-white/80 backdrop-blur-lg border-b border-black/10 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <SvgLogo className="h-12 w-auto" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <Button onClick={onToggleFilters} variant="outline" className="text-black border-black/20 hover:bg-black/5">
                <Filter className="h-4 w-4 mr-2" />
                Filtros
              </Button>

              
            </motion.div>
          </div>
        </div>
        
      </header>
      <LoginModal
          isOpen={showLogin}
          onClose={() => setShowLogin(false)}
          onLogin={handleAdminLogin}
        />
    </>
  );
};

export default Header;